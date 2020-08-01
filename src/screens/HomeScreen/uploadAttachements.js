import DocumentPicker from 'react-native-document-picker';
import {PermissionsAndroid} from 'react-native'
import RNFS from 'react-native-fs'
const fileType={
    audio:DocumentPicker.types.audio,
    document:DocumentPicker.types.pdf,
    image:DocumentPicker.types.images
}


getPermission = async (permission) => {
  let alreadyGranted = await PermissionsAndroid.check(permission);
  let requestGranted = '';
  if (!alreadyGranted) {
    requestGranted = await PermissionsAndroid.request(permission);
  }
  if (alreadyGranted || requestGranted === PermissionsAndroid.RESULTS.GRANTED) {
    return true;
  }
  return false;
}

export const uploadAttachements=async(item,uploadFile)=>{
    try {
      const readPermissionGranted = await getPermission("android.permission.READ_EXTERNAL_STORAGE");
      const writePermissionGranted = await getPermission("android.permission.WRITE_EXTERNAL_STORAGE");

      if (readPermissionGranted && writePermissionGranted) {
        const res = await DocumentPicker.pick({
          type: [fileType[item.type]],
          copyTo:"documentDirectory"
        })
        // copyFile
  // let sourcePath = "/storage/emulated/0/SourceFolder";
  // let destinationPath = "/storage/emulated/0/DestinationFolder";

console.log(res)
  let destinationPath = await RNFS.CachesDirectoryPath +res.name;
  RNFS.write(res.uri, destinationPath)  
    .then(result => {  
      console.log('file copied:', result);
    })
    .catch(err => {
      console.log(err);
    });
  }
    // console.log("ress",realPath)
        // uploadFile(realPath)
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          // User cancelled the picker, exit any dialogs or menus and move on
        } else {
          throw err;
        }
      }
      
}

const copyFile=async(source, dest)=> {
    let retry = false;
    try {
      await RNFS.copyFile(source, dest);
    } catch (error) {
      // On iOS it will throw an error if the file already exist
      // retry = true;
      // await this.unlink(dest);
    }

    if (retry) await RNFS.copyFile(source, dest);
  }

  // response => {
  //   let pdfCacheDirectory = "${RNFS.CachesDirectoryPath}/pdfCache";

  //   const split = response.uri.split("/");
  //   const name = split.pop();
  //   const inbox = split.pop();
  //   const realPath = "${RNFS.TemporaryDirectoryPath}${inbox}/${name}";

    //Construct new path
    // let newURI = "${pdfCacheDirectory}/${this.state.newImageID}";
    // let filename = response.uri.endsWith("pdf")
    //   ? Utils.stripSpecialCharacters(response.name)
    //   : Utils.stripSpecialCharacters(response.name) + ".pdf";
    // let newPath = "${newURI}/${filename}";

    // RNFS.copyFile(response.uri, newPath)
    //   .then(() => {
    //     console.log("file copied");

    //     this.setState(
    //       {
    //         attachment: {
    //           ...response,
    //           uri: newPath
    //         }
    //       },
    //       () => this.onSave("PDF")
    //     );
    //   })
    //   .catch(err => {
    //     console.log("Error copying", err);
    //   });
  
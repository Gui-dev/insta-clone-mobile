import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { Platform } from 'react-native'
import uuid from 'react-native-uuid'
import { getPictureBlob } from '../utils/getPictureBlob'

import { firebaseStorage } from './../services/firebase'

type PhotoResponse = {
  id: string
  url: string
}

export const addPhotoService = async (imageUri: string | undefined): Promise<PhotoResponse> => {
  if (imageUri) {
    const imageName = uuid.v4()

    const uploadBlob = await getPictureBlob(Platform.OS === 'ios' ? imageUri?.replace('file://', '') : imageUri)
    const newFile = ref(firebaseStorage, `images/${imageName}`)
    const upload = await uploadBytes(newFile, uploadBlob as Blob)
    const photoUrl = await getDownloadURL(upload.ref)

    return {
      id: upload.ref.name,
      url: photoUrl
    }
  } else {
    throw new Error('Tipo de arquivo não permitido')
  }
}

import { Component } from 'solid-js'
import { NoTitleModal } from '../../shared/Modal'
import { msgStore } from '../../store'
import { getAssetUrl } from '../../shared/util'

export const ImageModal: Component = () => {
  const state = msgStore()

  return (
    <NoTitleModal show={!!state.showImage} close={() => msgStore.showImage()} maxWidth="half">
      <div class="flex justify-center p-4">
        <img class="rounded-md" src={getAssetUrl(state.showImage!.msg)} />
      </div>
    </NoTitleModal>
  )
}

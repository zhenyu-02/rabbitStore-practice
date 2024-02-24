import ImageView from '@/components/imageView/index.vue'
import XtxSku from '@/components/XtxSku/index.vue'

export const componentPlungin = {
  install(app) {
    app.component('ImageView', ImageView)
    app.component('XtxSku', XtxSku)
  }
}
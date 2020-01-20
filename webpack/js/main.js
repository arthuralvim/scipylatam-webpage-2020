import '../scss/main.scss'
import 'jquery/dist/jquery.js'
import 'bootstrap'
import 'bootstrap-select/dist/js/bootstrap-select.js'
import 'bootstrap-select/dist/js/i18n/defaults-pt_BR.js'
import 'holderjs/holder.js'
import './components/menu.js'

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

dom.i2svg()

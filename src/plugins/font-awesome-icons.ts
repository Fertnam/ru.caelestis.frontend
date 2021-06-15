import { App } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faHome,
    faComments,
    faScroll,
    faDonate,
    faClipboardList,
    faGamepad,
    faExclamationCircle,
    faCheckCircle,
    faCogs,
    faDice,
    faCommentDots,
    faCrown,
    faEllipsisH,
    faCalendarAlt,
    faPlusCircle,
    faMinusCircle,
    faCreditCard,
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faHome,
    faComments,
    faScroll,
    faDonate,
    faClipboardList,
    faGamepad,
    faExclamationCircle,
    faCheckCircle,
    faCogs,
    faDice,
    faCommentDots,
    faCrown,
    faEllipsisH,
    faCalendarAlt,
    faPlusCircle,
    faMinusCircle,
    faCreditCard
)

export default {
    install(app: App): void {
        app.component('fa-icon', FontAwesomeIcon)
    },
}

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTasks, faCircleNotch, faExclamationTriangle, faFile, faPaperPlane, faDotCircle, faTimesCircle, faCheckCircle} from '@fortawesome/free-solid-svg-icons';

library.add(
    faCircleNotch,
    faCheckCircle,
    faDotCircle,
    faExclamationTriangle,
    faFile,
    faTasks,
    faTimesCircle,
    faPaperPlane);

const Icons = {
    ActionDefault : 'dot-circle',
    ActionError : 'times-circle',
    Actions: 'tasks',
    ActionSuccess : 'check-circle',
    Busy: 'circle-notch',
    Error:'exclamation-triangle',
    File: 'file',
    Outputs: 'paper-plane'
};

export default Icons;
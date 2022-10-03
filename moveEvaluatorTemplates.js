// this is a script that is executed on module build
// it is not bundled and only exists as a helper script

import fse from 'fs-extra';

fse.copySync('./modules/luctisity-evaluator/src/templates', './lib/modules/luctisity-evaluator/src/templates', { overwrite: true });
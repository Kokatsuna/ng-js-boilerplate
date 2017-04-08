import angular from 'angular'
import {actionChangeHeaderTitlePage} from '../../../actions/'

/* @ngInject */
class SettingsController {
  constructor ($scope, $mdDialog, $ngRedux) {
    this.$mdDialog = $mdDialog

    let unsubscribe = $ngRedux.connect(null, {actionChangeHeaderTitlePage})(this)
    this.actionChangeHeaderTitlePage('Settings')
    $scope.$on('$destroy', unsubscribe)
  }
  showAlert (ev) {
    this.$mdDialog.show(
      this.$mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Information about page')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(ev)
    )
  }
}
export default SettingsController

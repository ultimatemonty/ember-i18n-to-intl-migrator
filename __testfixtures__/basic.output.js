import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { translationMacro as t } from 'ember-intl';
import { translationMacro as tHelper } from 'ember-intl';

export default Route.extend({
  intl: inject('intl'),
  intl: inject(),
  intl: service(),

  random: alias('random'),


  init() {
    this.intl.t('wat');
    this.get('intl').t('wat');
    get(this, 'intl').t('wat');
    get(this, 'intl');
    let intl = this.get('intl');
    let intl = get(this, 'intl');
    let message = get(this, 'intl').t('.selector', {});
  }
});


/* eslint-disable dot-notation */
define([], () => {
  'use strict';

  /**
   * Default value expression for actionOccurrences.BusinessUnitId 
   * @param {object} context
   * @return {string}
   */
  function getActionOccurrencesBusinessUnitId(context) {
    const { $componentContext, $fields, $modules, $user } = context;

      if (($componentContext.LegalEmployer.includes('Dakota County'))) {
      return $componentContext.BusinessUnit;
      }
  }

  /**
   *
   * @param {object} context
   * @return {boolean}
   */
  function runCondition(context) {
    const { $componentContext, $fields, $modules, $user } = context;

    if ($fields.contactRelationships.EmergencyContactFlag.$value() === true) {
      return true;
    }

    return false;
  }

  return { getActionOccurrencesBusinessUnitId, runCondition };
});

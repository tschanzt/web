odoo.define('web_ckeditor4.FormView', function (require) {
"use strict";

    var core = require('web.core');
    var FormView = core.view_registry.get('form');
    //var enterpriseFormView = require('web_enterprise.FormView');

    FormView.include({

        can_be_discarded: function(message) {

            var res = this._super().done(function(){
                var instances = window.CKEDITOR.instances;
                for (var field in instances){
                    if (instances.hasOwnProperty(field)){
                        this.fields[field].destroy_content();
                    }
                }

            });
            return res;
        }

    });
});

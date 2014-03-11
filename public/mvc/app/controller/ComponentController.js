Ext.Component.override({
    constructor: function (config) {
        var app,
            controller;

        if (config && config.controller) {
            // debugger;
            console.log('This component has a controller.', config.controller);

            app = mvc.getApplication();
            controller = Ext.create(config.controller, {

                application: app,

                // Can we add multiple instances of a controller to the app?
                // TODO: Iterate the controller's ID so we can remove it later.
                id: config.controller,

                // Bind the component, so we can add scope in the controller's listeners.
                component: this
            });
            app.controllers.add(controller);

            controller.doInit();

        }
        this.callParent(arguments);
    }
});

// This controller can be inserted into a component
// so it only handles events within the scope of the component.
Ext.define('mvc.controller.ComponentController', {
    extend: 'Ext.app.Controller',

    constructor: function (config) {
        if (config.component) {
            // TODO: Alter the scope of the selectors so they start from this component.
            console.log('This controller is bound to a component.', config.component);
        }

        this.callParent(arguments);
    },

    // stores: ['RecentSongs'],
    
    init: function() {
        console.log('What component am I in?');
        
    }
});

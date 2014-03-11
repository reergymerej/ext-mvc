Ext.define('mvc.controller.FooController', {
    extend: 'mvc.controller.ComponentController',

    refs: [
        {
            ref: 'fooView',
            selector: 'fooview'
        }
    ],

    // stores: ['RecentSongs'],
    
    init: function() {
        this.control({
            'fooview': {
                click: this.onFooClick,
                'some-funky-event': this.onSomeFunkyEvent
            }
        });
        
        this.application.on({
            stationstart: Ext.emptyFn,
            scope: this
        });
    },
        
    onFooClick: function () {
        console.log('clicked foo', this);
    },

    onSomeFunkyEvent: function () {
        console.log('onSomeFunkyEvent');
    }
});

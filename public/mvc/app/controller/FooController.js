Ext.define('mvc.controller.FooController', {
    extend: 'Ext.app.Controller',

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
                click: this.onFooClick
            }
        });
        
        this.application.on({
            stationstart: Ext.emptyFn,
            scope: this
        });
    },
        
    onFooClick: function () {
        console.log('clicked foo', this);
    }
});

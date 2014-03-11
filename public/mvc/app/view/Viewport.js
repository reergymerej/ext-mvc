Ext.define('mvc.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',
    
    requires: [
        'mvc.view.FooView'
    ],
    
    initComponent: function() {
        this.items = [
            {
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                defaults: {
                    flex: 1
                },
                items: [
                    {
                        xtype: 'fooview'
                    },
                    {
                        html: 'hello'
                    }
                ]
            }
        ];
        
        this.callParent();
    }
});
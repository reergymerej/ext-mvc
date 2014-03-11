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
                        title: 'private foo',
                        items: [
                            {
                                xtype: 'fooview',
                                controller: 'mvc.controller.FooController'
                            }
                        ]
                    }
                ]
            }
        ];
        
        this.callParent();
    }
});
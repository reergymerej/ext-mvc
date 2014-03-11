Ext.define('mvc.view.FooView', {
    // extend: 'Ext.panel.Panel',
    extend: 'Ext.button.Button',
    alias: 'widget.fooview',
    html: 'I am a FooView.',
    handler: function () {
        this.fireEvent('some-funky-event');
    }
});
exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor: '#ECEFF1',
    backgroundColor: '#212121',
    borderColor: '#212121',
    cursorColor: 'rgba(0, 150, 136, .5)',
    colors: [
      '#000000',
      '#FF5252',
      '#9CCC65',
      '#fee94e',
      '#2b98f0',
      '#b38bfc',
      '#68b6f3',
      '#939393',
      '#617d8a',
      '#fc625d',
      '#9CCC65',
      '#fee94e',
      '#2b98f0',
      '#b38bfc',
      '#68b6f3',
      '#b2ccd6'
    ],
    css: `
      ${config.css || ''}

      .hyperterm_main {
        border: none !important;
        background: #212121 !important;        
      }
      .header_header {
        background: #212121 !important;
      }
      .tabs_nav{
        line-height: 50px !important;
        height: 50px !important;
      }

      .tab_text{
        line-height: 50px;
        height: 50px;
      }

      .tabs_list{
        max-height: 50px;
      }

      .tab_tab {
        border: 0;
        height: 50px;
        max-width: 200px;
      }

      .tab_icon{
        opacity: 0.2;
        right: 18px;
        top: 18px;
      }

      .tab_icon:hover{
        opacity: 1;
        background: none;
        color: #80ccc5;
      }

      .tab_shape{
        height: 8px;
        width: 8px;
      }

    .tab_tab:before{
      content: '';
      height: 2px;
      bottom: 0;
      left: 0;
      right: 0;
      border: none;
      background: #80ccc5;
      position: absolute;
      transform: scaleX(0);
      opacity: 0;
      transition: transform 150ms ease-in-out, opacity 150ms ease-in-out;
    }

    .tab_tab:hover:before,
    .tab_active:before {
      opacity: 1;
      transform: scaleX(1)    
    }
    `
  })
}

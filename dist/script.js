$(document).ready(function(){
        $('#vmap').css(
            {
                'width': '900px',
                'height': '600px',
                'margin':'auto'
            }
        );
        $('#vmap').vectorMap({
            map: 'uzbekistan',
            backgroundColor: 'transparent',
            color: '#212529',
            hoverColor: 'lightgreen',
            enableZoom: false,
            showTooltip: true,
            borderColor: '#fff',
            borderWidth: 2,
            borderOpacity: 1,
            onRegionSelect: function (event, code) {
                regionSelected(code);
            }
        });

        function regionSelected(code) {
            $('#map-content div.map-info').hide();
            $('#'+code).show();
        }
});
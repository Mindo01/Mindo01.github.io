requirejs.config({
    /*
        baseUrl: 
        JavaScript 파일이 있는 기본 경로 폴더를 설정한다.
        만약 data-main 속성이 사용되었다면, 그 경로가 baseUrl이 된다.
        data-main 속성은 require.js를 위한 특별한 속성으로 require.js는 스크립트 로딩을 시작하기 위해 이 부분을 체크한다.
    */
    baseUrl: 'js',
    
    /*
        paths: 
        path는 baseUrl 아래에서 직접적으로 찾을 수 없는 모듈명들을 위해 경로를 매핑해주는 속성이다.
        "/"로 시작하거나 "http" 등으로 시작하지 않으면, 기본적으로는 baseUrl에 상대적으로 설정하게 된다.
    
        paths: {
            "exam": "aaaa/bbbb"
        }
    
        의 형태로 설정한 뒤에, define에서 "exam/module" 로 불러오게 되면, 스크립트 태그에서는 실제로는 src="aaaa/bbbb/module.js" 로 잡을 것이다.
        path는 또한 아래와 같이 특정 라이브러리 경로 선언을 위해 사용될 수 있는데, path 매핑 코드는 자동적으로 .js 확장자를 붙여서 모듈명을 매핑한다.
    */
    paths:{
        'text'      : '../lib/require/text',
        'css'       : '../lib/require/css.min',
        'jquery'    : '../lib/jquery/jquery-3.6.0.min',
        'jquery-ui' : '../lib/jquery/jquery-ui.min'
    },
    shim: {
        "jquery-ui": {
            exports: "$",
            deps: ['jquery']
        },
    },
    config: {
        text: {
            // allow CORS        
            useXhr: function(url, protocol, hostname, port) {
                console.log('allow xhr');
                return true;
            },
            onXhr: function(xhr, url) {
                vpLog.display(VP_LOG_TYPE.LOG, xhr);
            }
        }
    },
    map: {
        '*': {
            text: '../lib/require/text',
            css :  '../lib/require/css.min'
        }
    }
});

define(['text',
        'css', 
        'jquery',
        'jquery-ui',
        // './MainFrame'
], function (text, css, $, ui, mainFrame) {
    //====================================================================
    // Operations after document page is ready
    //====================================================================
    $(document).ready(function () {
        //================================================================
        // Global Variables on window object
        //================================================================
        window.$ = $;

        loadMindos();
    });

    var loadMindos = function() {
        console.log('Welcome to Mindos');
    }

    return {
        loadMindos: loadMindos
    }
});
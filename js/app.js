// JavaScript to handle mouseover and mouseout events
var activeMethodPill = null;
var activeScenePill = null;
var activeModePill = null;
var activeVidID = 0;
var select = false;


$(document).ready(function () {
    var editor = CodeMirror.fromTextArea(document.getElementById("bibtex"), {
        lineNumbers: false,
        lineWrapping: true,
        readOnly: true
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    activeMethodPill = $('.method-pill').filter('.active')[0];
    activeModePill = $('.mode-pill').filter('.active')[0];
    activeScenePill = $('.scene-pill').filter('.active')[0];

    // resizeAndPlay($('#sparsity')[0]);
});

function selectCompVideo(methodPill, scenePill, n_views, modePill) {
    var videoSwitch = document.getElementById("compVideoSwitch");
    var viewNum = document.getElementById("compVideoValue");

    
    if (activeMethodPill && activeMethodPill.classList) {
        activeMethodPill.classList.remove("active");
    }
    if (activeScenePill && activeScenePill.classList) {
        activeScenePill.classList.remove("active");
    }
    if (modePill && activeModePill && activeModePill.classList) {
        activeModePill.classList.remove("active");
        modePill.classList.add("active");
        activeModePill = modePill;
    }

    
    activeMethodPill = methodPill;
    activeScenePill = scenePill;
    // methodPill.classList.add("active");
    scenePill.classList.add("active");

    
    // var method = methodPill.getAttribute("data-value");
    var scene = scenePill.getAttribute("data-value");
    var mode = activeModePill ? activeModePill.getAttribute("data-value") : null;

    
    activeVidID = 1 - activeVidID;
    var video_active = document.getElementById("compVideo" + activeVidID);
    var video_hidden = document.getElementById("compVideo" + (1 - activeVidID));
    if (video_active) {
        video_active.src = "videos/comparison/" + scene + ".mp4";
        video_active.load();
    }

    // 更新视图数量
    if (n_views && viewNum) {
        viewNum.innerHTML = n_views;
    }
}
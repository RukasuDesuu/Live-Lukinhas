let teams = ['100','BYG','C9','DK','DMG','EDG','FNC','FPX','GEN','GS','HLE','INF','LNG','MAD','PCE','PSG','RED','RGE','RNG','T1','TL','UOL','PLACEHOLDER']

for (var x = 1; x < 9; x++){
    for (var i = 0; i < teams.length; i++){
        var opt = document.createElement('option');
        console.log(i)
        opt.value = teams[i];
        opt.innerHTML = teams[i];
        document.getElementById('teams-select' + x).appendChild(opt);
    }
}


function change_image(index){
    document.getElementById('image-team' + index).src = './images/' + document.getElementById('teams-select' + index).value + '.png'

}
    

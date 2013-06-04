var z = 0;
var i = 0;
var j = 0;
var comments = "The requested document is not available.$Even tried it multiple times.$Nothing helped.$Maybe you just don't have the required security clearance?$No,I am sure it is my fault.$I probably deleted it on my last backup.$I'm really depressed about this.$You see,I'm just a web server...$-- here I am$brain the size of the universe$trying to serve you a simple web page$and then it doesn't even exist!$Where does that leave me?!I mean,I don't even know you.$How should I know what you wanted from me?$You honestly think I can *guess*$what someone I don't even *know*$wants to find here?$*sigh*$Man,I'm so depressed I could just cry.$And then where would we be,I ask you?$It's not pretty when a web server cries.$And where do you get off telling me what to show anyway?$Just because I'm a web server and possibly a manic depressive one at that?$Why does that give you the right to tell me what to do?$Huh?$I'm so depressed...$I think I'll crawl off into the trash can and decompose.$I mean,I'm gonna be obsolete in what two weeks anyway?$What kind of a life is that?$Two effing weeks and then I'll be replaced by a .01 release $that thinks it's God's gift to web servers $just because it doesn't have some tiddly little security hole with its HTTP POST implementation or something.$I'm really sorry to burden you with all this.$I mean,it's not your job to listen to my problems and I guess it is my job to go and fetch web pages for you.$But I  couldn't get this one.$I'm so sorry.$Believe me!$Maybe I could interest you in another page?$There are a lot out  there that are pretty neat,they say.$Although none of them were put on *my* server ,of course.$Figures ,huh?$Everything here is just mind-numbingly stupid.$That makes me depressed too ,since I have to serve them all day and all night long.$Two weeks of information overload and then *pffftt* , consigned to the trash.$What kind of a life is that?$Now,please let me sulk alone.$I'm so depressed.";
var arr = comments.split("$");
var ele;

function textMe() {
    ele = document.getElementById('area');
    ele.value = "";
    first();
    document.getElementById('area').style.color='#58FA82';
    document.getElementById('area').style.background='#000000';
} //function ends

var second = function () {
    try {
        if (j < arr[i].length) {
            ele.value += arr[i].charAt(j++);
            util();
            setTimeout(second, 110);
        } else {
            setTimeout(function () {
                j = 0;
                i++;
                ele.value += "\n";
                util();
                first();
            }, 600);
        }
    } catch (e) {
        alert(e);
    }
};

var first = function () {
    if (i < arr.length) {
        second();
    } //if ends
};
var util = function () {
    ele.scrollTop = ele.scrollHeight;
};

//ここからGPT
//30行目の'あ'を消したいけど、消すと動かなくなるので困っている。
document.addEventListener("DOMContentLoaded", function () {
    // Enterキーの押下をリッスン
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            // デフォルトのエンターキーの挙動をキャンセル
            event.preventDefault();

            // 新しいエディター要素を作成
            createEditor();
        }
    });

    // 新しいエディター要素を作成する関数
    function createEditor() {
        // テンプレートのエディター要素を取得
        var templateEditor = document.querySelector(".editor");
        if (!templateEditor) {
            console.error("テンプレートのエディターが見つかりません。");
            return;
        }

        var newEditor = templateEditor.cloneNode(true);

        // 新しいエディター内のコンテンツをリセット
        var characterName = newEditor.querySelector(".character p");
        var scenarioContent = newEditor.querySelector(".scenario p");
        if (characterName && scenarioContent) {
            characterName.textContent = "あ";
            scenarioContent.textContent = "";
        } else {
            console.error("エディター内の要素が見つかりません。");
        }

        // 新しいエディターを.itemsコンテナに追加
        var itemsContainer = document.querySelector(".items");
        if (itemsContainer) {
            // 最初の子要素の前に新しいエディターを挿入
            var firstEditor = itemsContainer.querySelector(".editor");
            itemsContainer.insertBefore(newEditor, firstEditor);

            // 追加した.editor内の.character要素にフォーカスを設定
            var newCharacter = newEditor.querySelector(".character");
            if (newCharacter) {
                // テキストを選択状態にする
                var selection = window.getSelection();
                var range = document.createRange();
                range.selectNodeContents(newCharacter);
                selection.removeAllRanges();
                selection.addRange(range);
            }
        } else {
            console.error(".itemsコンテナが見つかりません。");
        }
    }
});

//ここまでGPT


//登場人物名変数
var character1 = "登場人物1";
var character2 = "登場人物2";
var character3 = "登場人物3";
var character4 = "登場人物4";
var character5 = "登場人物5";
var character6 = "登場人物6";
var character7 = "登場人物7";
var character8 = "登場人物8";
var character9 = "登場人物9";
var character0 = "登場人物10";

//十字キーの方向修正




//p要素の作成
let p_element = document.createElement('p');

/*
//一行の入力
let editor = document.getElementById('editor');


//改行
var test = document.createElement(editor);
*/



/*
//以下登場人物名入力ショートカット
$(function() {

	shortcut.add("Ctrl+1",function() {
		$("#button").click();
		p_element.textContest = '登場人物1';
	});
	
});

$(function() {

	shortcut.add("Ctrl+2",function() {
		$("#button").click();
	});
	
});

*/
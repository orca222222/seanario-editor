//ここからGPT
//エンターを押した時に改行できるように。
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

        // テンプレートのdisplay: noneを解除している
        newEditor.style = '';

        // 新しいエディターを.itemsコンテナに追加
        var itemsContainer = document.querySelector(".items");
        if (itemsContainer) {
            // フォーカスされているエディターを取得
            var focusedEditor = document.activeElement.closest('.editor');

            // フォーカスされているエディターの後ろに新しいエディターを挿入
            if (focusedEditor) {
                focusedEditor.after(newEditor);
            } else {
                // フォーカスされているエディターがない場合は最後に挿入
                itemsContainer.appendChild(newEditor);
            }

            // 追加した.editor内の.character要素にフォーカスを設定
            var newCharacter = newEditor.querySelector(".character");
            if (newCharacter) {
                // テキストを選択状態にする
                var selection = window.getSelection();
                var range = document.createRange();
                range.selectNodeContents(newCharacter);
                selection.removeAllRanges();
                selection.addRange(range);

                // キャラクター要素にフォーカスを設定
                newCharacter.focus();
            }
        } else {
            console.error(".itemsコンテナが見つかりません。");
        }
    }

    // 最初にひとつ追加しておく
    createEditor();
});

//全体を選択してbackspaceできないとか、backspaceで前のdivに移動できないとか直したい。

//十字キーの方向修正



//登場人物入力
// 10個の変数を作成し、初期化
var character0 = "";
var character1 = "登場人物１";
var character2 = "登場人物２";
var character3 = "登場人物３";
var character4 = "登場人物４";
var character5 = "登場人物５";
var character6 = "登場人物６";
var character7 = "登場人物７";
var character8 = "登場人物８";
var character9 = "登場人物９";
var character10 = "登場人物１０";

document.addEventListener("keydown", function (event) {
    // Ctrlキーが押されているか確認
    if (event.ctrlKey) {
        // 数字キーが押されたか確認
        var numberKey = parseInt(event.key, 10);
        if (!isNaN(numberKey) && numberKey >= 1 && numberKey <= 9) {
            // 対応する変数に格納された文字列をcontenteditableな要素に入力
            setInputValue(numberKey);
            // デフォルトの動作をキャンセル
            event.preventDefault();
        } else if (event.key === "0") {
            // Ctrl+0が押された場合、対応する変数に格納された文字列をcontenteditableな要素に入力
            setInputValue(10);
            // デフォルトの動作をキャンセル
            event.preventDefault();
        }
    }
});

function setInputValue(number) {
    var character = window["character" + number]; // 対応する文字列を取得
    var selection = document.getSelection(); // 現在の選択範囲を取得

    // 選択範囲があるか、選択範囲がテキストを含むか確認
    if (selection.rangeCount > 0 && selection.anchorNode) {
        var node = selection.anchorNode; // 選択範囲の開始ノード
        var editableElement = null;

        // nodeがcontenteditableの要素であるか、もしくはその親要素を探索
        while (node != null) {
            if (node.nodeType === 1 && node.getAttribute("contenteditable") === "true") {
                editableElement = node; // contenteditable要素を見つけた
                break;
            }
            node = node.parentNode; // 親ノードへ移動
        }

        // contenteditable要素が見つかった場合、その内容を更新
        if (editableElement) {
            editableElement.innerHTML = ""; // 既存の内容を削除
            editableElement.appendChild(document.createTextNode(character)); // 新しい文字列を挿入
        }
    }
}


//ここまでGPT

//ボタンを押して変数の変更

document.getElementById("button1").addEventListener("click",function() {
	
	let userInput = document.getElementById("userInput").value;
	if (userInput.trim() !== "") {
		character1 = userInput;
	}
})

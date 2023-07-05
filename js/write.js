
const Editor = toastui.Editor;
	
const editor = new Editor({
      el: document.querySelector('#editor'),
      toolbarItems: [
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        ['table', 'image', 'link'],
        ['code', 'codeblock'],
        ['scrollSync'],
      ],
      height: '600px',
      initialEditType: 'wysiwyg',
      previewStyle: 'vertical',
    });

seeHtml = function(){
    alert(editor.getHTML());
}
seeMd = function(){
    alert(editor.getMarkdown());
}
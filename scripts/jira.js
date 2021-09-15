const issueURL = window.location.href;
const issueKey = document.getElementById("key-val").textContent;
const issueTitle = document.getElementById("summary-val").textContent;
const issue = `<a href='${issueURL}'>${issueKey}</a> ${issueTitle}`.replaceAll('"', "'");

const script = `
function copyToClip(str) {
  function listener(e) {
    e.clipboardData.setData('text/html', str);
    e.clipboardData.setData('text/plain', str);
    e.preventDefault();
  }
  document.addEventListener('copy', listener);
  document.execCommand('copy');
  document.removeEventListener('copy', listener);
};
copyToClip(&quot;${issue}&quot;)
`

const copy = `
<div id="copier-copy-container" class="aui-buttons pluggable-ops">
	<a
	id="copier-copy-issue"
	title="Copy issue to clipboard (control + c)"
	class="aui-button"
	href="javascript:${script}"
	>
    	<!--- <span class="icon icon-default aui-icon aui-icon-small aui-iconfont-export"></span> --->
    	<span class="trigger-label">Copy</span>
	</a>
</div>
`

const atlassian_copier_location = document.getElementById("opsbar-edit-issue_container");
atlassian_copier_location.insertAdjacentHTML('beforebegin', copy);

document.onkeyup = function(e) {
	if (e.ctrlKey && e.code == 'KeyC') {
    	function copyToClip(str) {
		  function listener(e) {
		    e.clipboardData.setData('text/html', str);
		    e.clipboardData.setData('text/plain', str);
		    e.preventDefault();
		  }
		  document.addEventListener('copy', listener);
		  document.execCommand('copy');
		  document.removeEventListener('copy', listener);
		};
		copyToClip(issue)
    }
};
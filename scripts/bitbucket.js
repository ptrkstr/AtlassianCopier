const prURL = window.location.href;
const prTitle = document.getElementsByClassName("pull-request-title")[0].textContent;
const pr = `PR for ${prTitle}<br><a href='${prURL}'>${prURL}</a>`.replaceAll('"', "'");

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
copyToClip(&quot;${pr}&quot;)
`

const content = `
<style>
#copier-copy {
	background-color: rgba(9, 30, 66, 0.04);
	color: rgb(66, 82, 110);
	cursor: pointer;
	text-decoration: none;
}
#copier-copy:hover {
	background-color: rgba(9, 30, 66, 0.08);
}
</style>
<script>
</script>
<a href="javascript:${script}" title="Copy issue to clipboard (control + c)">
	<button id="copier-copy" class="css-18u3ks8">
	Copy
	</button>
</a>
`

const atlassian_copier_location = document.getElementsByClassName("pull-request-more-actions")[0];
atlassian_copier_location.insertAdjacentHTML('beforebegin', content);

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
		copyToClip(pr)
  }
};
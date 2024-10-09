const form = document.getElementById ("resumeform") as HTMLFormElement;
const resumeDisplay = document.getElementById ("resumedisplay") as HTMLDivElement;

form.addEventListener ("submit",(event:Event)=>{
     event.preventDefault ();
     //input collection
    const Name = (document.getElementById ("name") as HTMLInputElement).value
    const Email = (document.getElementById ("email") as HTMLInputElement).value
    const Number = (document.getElementById ("number") as HTMLInputElement).value
    const education = (document.getElementById ("Education") as HTMLInputElement).value
    const experience = (document.getElementById ("Experience") as HTMLInputElement).value
    const Skills = (document.getElementById ("skills") as HTMLInputElement).value
// generated input
const resumeHtml = `
<h1>Generate Resume</h1>
<h3><b>Persoanal Information</b></h3>
<p><b>Name:</b><span contenteditable="true">${Name}</span><p>
<p><b>Email:</b><span contenteditable="true">${Email}</span><p>
<p><b>Number:</b> <span contenteditable="true">${Number}</span><p>
<h3>Education</h3>
<p contenteditable="true">${education}</p>
<h3 >Experience</h3>
<p contenteditable="true">${experience}</p>
<h3>Skills</h3>
<p contenteditable="true">${Skills}</p>`

if(resumeDisplay){
    resumeDisplay.innerHTML = resumeHtml;
}else {
    console.error ("This resume display is missing");
}
});
const shareableLink = document.getElementById("shareable-link") as HTMLAnchorElement
shareableLink?.addEventListener("click",()=>{

})
const pdfbutton = document.getElementById("pdf") as HTMLButtonElement
pdfbutton?.addEventListener("click",()=>{
    window.print()
})
import members from "./team-database.js"
const memberImage = document.getElementById("picture-display")
const memberName = document.getElementById("member-name")
const memberPos = document.getElementById("member-position")
const aboutMember = document.getElementById("member-info")

const member = new URLSearchParams(location.search).get("member")

const memberInfo = members[member]

if (!memberInfo) {
    document.title = "404"
    document.body.innerHTML = `
        <div class="section">
            <h3 class="text-head"> 404 - Not Found <h3>
            <a href="/team.html"> See all members <a>
        <div>
    `
}

memberImage.src = `images/members/${memberInfo["profile pic"]}`
memberName.innerText = member
memberPos.innerText = memberInfo.position
document.title = member

memberInfo.info.forEach(paragraph => {
    const p = document.createElement("p")

    p.classList.add("text", )
    p.innerText = paragraph

    aboutMember.appendChild(p)
});
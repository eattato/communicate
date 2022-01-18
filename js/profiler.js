var genProfile = function (target, param) {
    let profile = document.createElement("div");
    let profile__left = document.createElement("div");
    let profile__imgFrame = document.createElement("div");
    let profile__img = document.createElement("img");
    let profile__statFrame = document.createElement("span");
    let profile__name = document.createElement("span");
    let profile__status = document.createElement("span");
    let chatinfo = document.createElement("div");
    let chatinfo__time = document.createElement("span");
    let chatinfo__bubble = document.createElement("span");
    let chatinfo__blank = document.createElement("div");

    profile.appendChild(profile__left);
    profile__left.appendChild(profile__imgFrame);
    if (param.image != undefined)
    {
        profile__img.src = param.image;
        profile__imgFrame.appendChild(profile__img);
    }
    profile__left.appendChild(profile__statFrame);
    if (param.name != undefined)
    {
        profile__name.innerHTML = param.name;
        profile__statFrame.appendChild(profile__name);
    }
    if (param.status != undefined)
    {
        profile__status = param.status;
        profile__statFrame.appendChild(profile__status);
    }

    profile.appendChild(chatinfo);
    if (param.chatinfo != undefined)
    {
        chatinfo__time.innerHTML = param.chatinfo.time;
        chatinfo.appendChild(chatinfo__time);
        if (param.chatinfo.bubble != undefined)
        {
            chatinfo__bubble.innerHTML = param.chatinfo.bubble;
            chatinfo.appendChild(chatinfo__bubble);
        }
        chatinfo.appendChild(chatinfo__blank);
    }
    document.getElementById(target).append(profile);
    return;
}
document.addEventListener("DOMContentLoaded", () => {
    const samlResponseInput = document.querySelector('input[name="SAMLResponse"]');
    const samlResponse = samlResponseInput.value;

    const info = document.createElement('div');
    info.innerHTML = `
    <textarea rows="20" cols="60" readonly>${samlResponse}</textarea>
    <button id="cp-saml-btn">Copy</button>
    `;

    document.body.insertBefore(info, null);

    document.getElementById("cp-saml-btn").addEventListener("click", () => {
        navigator.clipboard.writeText(samlResponse);
    });
});
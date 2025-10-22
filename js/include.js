async function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");
  for (const el of elements) {
    const file = el.getAttribute("data-include");
    try {
      const res = await fetch(file);
      if (res.ok) {
        el.innerHTML = await res.text();
      } else {
        el.innerHTML = `Không tải được file: ${file}`;
      }
    } catch (e) {
      el.innerHTML = `Lỗi tải file: ${file}`;
    }
  }
}

document.addEventListener("DOMContentLoaded", includeHTML);

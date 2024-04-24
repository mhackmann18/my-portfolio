const path = window.location.pathname;

// Create a new HTML element
let header = document.createElement("header");

header.classList.add(
  "header",
  "flex",
  "justify-center",
  "fixed",
  "px-5",
  "w-full",
  "left-0",
  "right-0",
  "text-primary",
  "top-0",
  "bg-tertiary",
  "items-center",
  "h-20",
  "z-20"
);

header.innerHTML = `
  <div class="max-w-6xl flex justify-between w-full font-gt_america">
    <nav>
      <ul class="leading-6 text-sm text-background">
        <li class="inline-block mr-2 hover:underline">
          <a href="/" class="${
            path === "/" ? "underline underline-offset-2 font-medium" : ""
          }">HOME</a>
        </li>
        <li class="inline-block mr-2 hover:underline hover:underline-offset-2">
          <a href="/projects.html" class="${
            path === "/projects.html"
              ? "underline underline-offset-2 font-medium"
              : ""
          }">PROJECTS</a>
        </li>
        <li class="inline-block mr-2 hover:underline">
          <a href="/src/assets/Matthew_Hackmann_Resume.pdf" target="_blank">RESUME</a>
        </li>
      </ul>
    </nav>
    <div>
      <a href="https://github.com/mhackmann18" target="_blank">
        <img
          class="inline w-7"
          alt="github logo"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiMyMjIyMjIiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTE1LDNjLTYuNjI3LDAgLTEyLDUuMzczIC0xMiwxMmMwLDUuNjIzIDMuODcyLDEwLjMyOCA5LjA5MiwxMS42M2MtMC4wNTYsLTAuMTYyIC0wLjA5MiwtMC4zNSAtMC4wOTIsLTAuNTgzdi0yLjA1MWMtMC40ODcsMCAtMS4zMDMsMCAtMS41MDgsMGMtMC44MjEsMCAtMS41NTEsLTAuMzUzIC0xLjkwNSwtMS4wMDljLTAuMzkzLC0wLjcyOSAtMC40NjEsLTEuODQ0IC0xLjQzNSwtMi41MjZjLTAuMjg5LC0wLjIyNyAtMC4wNjksLTAuNDg2IDAuMjY0LC0wLjQ1MWMwLjYxNSwwLjE3NCAxLjEyNSwwLjU5NiAxLjYwNSwxLjIyMmMwLjQ3OCwwLjYyNyAwLjcwMywwLjc2OSAxLjU5NiwwLjc2OWMwLjQzMywwIDEuMDgxLC0wLjAyNSAxLjY5MSwtMC4xMjFjMC4zMjgsLTAuODMzIDAuODk1LC0xLjYgMS41ODgsLTEuOTYyYy0zLjk5NiwtMC40MTEgLTUuOTAzLC0yLjM5OSAtNS45MDMsLTUuMDk4YzAsLTEuMTYyIDAuNDk1LC0yLjI4NiAxLjMzNiwtMy4yMzNjLTAuMjc2LC0wLjk0IC0wLjYyMywtMi44NTcgMC4xMDYsLTMuNTg3YzEuNzk4LDAgMi44ODUsMS4xNjYgMy4xNDYsMS40ODFjMC44OTYsLTAuMzA3IDEuODgsLTAuNDgxIDIuOTE0LC0wLjQ4MWMxLjAzNiwwIDIuMDI0LDAuMTc0IDIuOTIyLDAuNDgzYzAuMjU4LC0wLjMxMyAxLjM0NiwtMS40ODMgMy4xNDgsLTEuNDgzYzAuNzMyLDAuNzMxIDAuMzgxLDIuNjU2IDAuMTAyLDMuNTk0YzAuODM2LDAuOTQ1IDEuMzI4LDIuMDY2IDEuMzI4LDMuMjI2YzAsMi42OTcgLTEuOTA0LDQuNjg0IC01Ljg5NCw1LjA5N2MxLjA5OCwwLjU3MyAxLjg5OSwyLjE4MyAxLjg5OSwzLjM5NnYyLjczNGMwLDAuMTA0IC0wLjAyMywwLjE3OSAtMC4wMzUsMC4yNjhjNC42NzYsLTEuNjM5IDguMDM1LC02LjA3OSA4LjAzNSwtMTEuMzE1YzAsLTYuNjI3IC01LjM3MywtMTIgLTEyLC0xMnoiPjwvcGF0aD48L2c+PC9nPgo8L3N2Zz4="
        />
      </a>
      <a
      href="mailto:matthackmann18@gmail.com"
      >
        <img
          alt="svgImg"
          class="inline ml-2 w-6"
          src="/src/assets/images/email-icon.png"
        />
      </a>
    </div>
  </div>
`;

let lastScrollTop = 0;

window.addEventListener(
  "scroll",
  function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      // downscroll code
      // header.classList.remove("active");
      header.classList.add("inactive");
    } else {
      // upscroll code
      header.classList.remove("inactive");
      // header.classList.add("active");
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  },
  false
);

// Append the header to the body of each page
document.body.prepend(header);

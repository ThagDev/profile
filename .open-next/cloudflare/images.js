var define_IMAGES_LOCAL_PATTERNS_default = [];
var define_IMAGES_REMOTE_PATTERNS_default = [{ protocol: "https", hostname: "^(?:^(?:cdn\\.dribbble\\.com)$)$", port: "", pathname: "^(?:\\/(?!\\.{1,2}(?:\\/|$))(?:(?:(?!(?:^|\\/)\\.{1,2}(?:\\/|$)).)*?))$" }, { protocol: "https", hostname: "^(?:^(?:media2\\.dev\\.to)$)$", port: "", pathname: "^(?:\\/(?!\\.{1,2}(?:\\/|$))(?:(?:(?!(?:^|\\/)\\.{1,2}(?:\\/|$)).)*?))$" }, { protocol: "https", hostname: "^(?:^(?:miro\\.medium\\.com)$)$", port: "", pathname: "^(?:\\/(?!\\.{1,2}(?:\\/|$))(?:(?:(?!(?:^|\\/)\\.{1,2}(?:\\/|$)).)*?))$" }, { protocol: "https", hostname: "^(?:^(?:dev\\-to\\-uploads\\.s3\\.amazonaws\\.com)$)$", port: "", pathname: "^(?:\\/(?!\\.{1,2}(?:\\/|$))(?:(?:(?!(?:^|\\/)\\.{1,2}(?:\\/|$)).)*?))$" }, { protocol: "https", hostname: "^(?:^(?:res\\.cloudinary\\.com)$)$", port: "", pathname: "^(?:\\/(?!\\.{1,2}(?:\\/|$))(?:(?:(?!(?:^|\\/)\\.{1,2}(?:\\/|$)).)*?))$" }, { protocol: "https", hostname: "^(?:^(?:github\\.com)$)$", port: "", pathname: "^(?:\\/(?!\\.{1,2}(?:\\/|$))(?:(?:(?!(?:^|\\/)\\.{1,2}(?:\\/|$)).)*?))$" }, { protocol: "https", hostname: "^(?:^(?:raw\\.githubusercontent\\.com)$)$", port: "", pathname: "^(?:\\/(?!\\.{1,2}(?:\\/|$))(?:(?:(?!(?:^|\\/)\\.{1,2}(?:\\/|$)).)*?))$" }, { protocol: "https", hostname: "^(?:^(?:images\\.unsplash\\.com)$)$", port: "", pathname: "^(?:\\/(?!\\.{1,2}(?:\\/|$))(?:(?:(?!(?:^|\\/)\\.{1,2}(?:\\/|$)).)*?))$" }, { protocol: "https", hostname: "^(?:^(?:via\\.placeholder\\.com)$)$", port: "", pathname: "^(?:\\/(?!\\.{1,2}(?:\\/|$))(?:(?:(?!(?:^|\\/)\\.{1,2}(?:\\/|$)).)*?))$" }, { protocol: "https", hostname: "^(?:^(?:picsum\\.photos)$)$", port: "", pathname: "^(?:\\/(?!\\.{1,2}(?:\\/|$))(?:(?:(?!(?:^|\\/)\\.{1,2}(?:\\/|$)).)*?))$" }, { protocol: "https", hostname: "^(?:^(?:nextjs\\.org)$)$", port: "", pathname: "^(?:\\/(?!\\.{1,2}(?:\\/|$))(?:(?:(?!(?:^|\\/)\\.{1,2}(?:\\/|$)).)*?))$" }, { protocol: "https", hostname: "^(?:^(?:cdn\\-media\\-0\\.freecodecamp\\.org)$)$", port: "", pathname: "^(?:\\/(?!\\.{1,2}(?:\\/|$))(?:(?:(?!(?:^|\\/)\\.{1,2}(?:\\/|$)).)*?))$" }];
function fetchImage(fetcher, imageUrl) {
  if (!imageUrl || imageUrl.length > 3072 || imageUrl.startsWith("//")) {
    return getUrlErrorResponse();
  }
  if (imageUrl.startsWith("/")) {
    let pathname;
    let url2;
    try {
      url2 = new URL(imageUrl, "http://n");
      pathname = decodeURIComponent(url2.pathname);
    } catch {
      return getUrlErrorResponse();
    }
    if (/\/_next\/image($|\/)/.test(pathname)) {
      return getUrlErrorResponse();
    }
    if (define_IMAGES_LOCAL_PATTERNS_default.length > 0 && !define_IMAGES_LOCAL_PATTERNS_default.some((p) => matchLocalPattern(p, url2))) {
      return getUrlErrorResponse();
    }
    return fetcher?.fetch(`http://assets.local${imageUrl}`);
  }
  let url;
  try {
    url = new URL(imageUrl);
  } catch {
    return getUrlErrorResponse();
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return getUrlErrorResponse();
  }
  if (!define_IMAGES_REMOTE_PATTERNS_default.some((p) => matchRemotePattern(p, url))) {
    return getUrlErrorResponse();
  }
  return fetch(imageUrl, { cf: { cacheEverything: true } });
}
function matchRemotePattern(pattern, url) {
  if (pattern.protocol !== void 0 && pattern.protocol.replace(/:$/, "") !== url.protocol.replace(/:$/, "")) {
    return false;
  }
  if (pattern.port !== void 0 && pattern.port !== url.port) {
    return false;
  }
  if (pattern.hostname === void 0 || !new RegExp(pattern.hostname).test(url.hostname)) {
    return false;
  }
  if (pattern.search !== void 0 && pattern.search !== url.search) {
    return false;
  }
  return new RegExp(pattern.pathname).test(url.pathname);
}
function matchLocalPattern(pattern, url) {
  if (pattern.search !== void 0 && pattern.search !== url.search) {
    return false;
  }
  return new RegExp(pattern.pathname).test(url.pathname);
}
function getUrlErrorResponse() {
  return new Response(`"url" parameter is not allowed`, { status: 400 });
}
export {
  fetchImage,
  matchLocalPattern,
  matchRemotePattern
};

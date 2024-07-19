"use client"

const checkIsNavigationSupported = () => {
    // @ts-ignore
    return Boolean(document.startViewTransition)
}

const fetchPage = async (url: string) => {
    const response = await fetch(url)
    const text = await response.text()

    const match = text.match(/<main[^>]*>([\s\S]*)<\/main>/i)

    if (match && match[1]) {
        const data = match[1]
        return data
    } else {
        console.log("No match found for <main> tag")
        return null
    }
}

// @ts-ignore
window && window.navigation.addEventListener('navigate', (event) => {
    console.log("navigation supported?: ", checkIsNavigationSupported())
    if (!checkIsNavigationSupported()) return;
    const toUrl = new URL(event.destination.url);

    console.log("location", location.origin)
    console.log("toUrl", toUrl.origin)
    if (location.origin !== toUrl.origin) return;

    event.intercept({
        async handler() {
            console.log("event.intercept - handler: ", toUrl.pathname + toUrl.search)
            const data = await fetchPage(toUrl.pathname + toUrl.search);
            if (!data) return;

            // @ts-ignore
            document.startViewTransition(() => {
                const main = document.querySelector('main')
                if (main) main.innerHTML = data

                document.documentElement.scrollTop = 0
            })
        }
    })
});
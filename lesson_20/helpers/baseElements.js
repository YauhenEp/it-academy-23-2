class BaseElements {
    async wrapper(selector) {
        return $(selector)
    }

    async wrapperElements(selector) {
        return $$(selector)
    }
}

module.exports = new BaseElements();
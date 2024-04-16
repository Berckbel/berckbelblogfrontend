export const validateFile = (image: File | null): boolean => {
    const MAX_FILE_SIZE: number = 2 * 1024 * 1024; //2MB

    const errorDiv: HTMLElement | null = document.getElementById("imageError")
    let fileErrorMessage: string = ""

    if (image) {
        if (!(image.type.includes("image/jpeg") || image.type.includes("image/png"))) {
            fileErrorMessage = "Not valid image type"
        }

        if (image.size > MAX_FILE_SIZE) {
            fileErrorMessage = "Image mut be under 2MB"
        }
    }

    if (!image) {
        fileErrorMessage = "Required Image"
    }

    if (errorDiv) {
        errorDiv.innerHTML = fileErrorMessage
    }

    if (fileErrorMessage) {
        return true
    }

    return false

}

export const validateEditFile = (image: File | null): boolean => {
    const MAX_FILE_SIZE: number = 2 * 1024 * 1024; //2MB

    const errorDiv: HTMLElement | null = document.getElementById("imageError")
    let fileErrorMessage: string = ""

    if (image) {
        if (!(image.type.includes("image/jpeg") || image.type.includes("image/png"))) {
            fileErrorMessage = "Not valid image type"
        }

        if (image.size > MAX_FILE_SIZE) {
            fileErrorMessage = "Image mut be under 2MB"
        }
    }

    if (errorDiv) {
        errorDiv.innerHTML = fileErrorMessage
    }

    if (fileErrorMessage) {
        return true
    }

    return false

}
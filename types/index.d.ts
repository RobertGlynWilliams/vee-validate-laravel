import Vue from 'vue';

interface LaravelData {
    user: {
        id: number,
        email: string,
        name: string,
        updated_at: string,
        created_at: string
    }
}

interface LaravelErrorResponse {
    message: string, 
    errors: { 
        [key: string]: string[] 
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $setLaravelValidationErrorsFromResponse(errorResponse: LaravelErrorResponse): void,
        $laravelData: LaravelData
    }
}
module default {
    type Call {
        required property call_id -> str {
            constraint exclusive;
        }
        required property user_number -> str;
        required property target_phone_number -> str;
        required property goal -> str;
        required property phone_menu_option_transcription -> str;
        required property waiting_for_target -> bool;
        required property ongoing_call -> bool;
    }
}
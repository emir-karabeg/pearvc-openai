CREATE MIGRATION m1pnbjqrpbstaez5unhdh47oq7lko3tevb2whtn2oef32fy6mhhsiq
    ONTO initial
{
  CREATE TYPE default::Call {
      CREATE REQUIRED PROPERTY call_id: std::str {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE REQUIRED PROPERTY goal: std::str;
      CREATE REQUIRED PROPERTY ongoing_call: std::bool;
      CREATE REQUIRED PROPERTY phone_menu_option_transcription: std::str;
      CREATE REQUIRED PROPERTY target_phone_number: std::str;
      CREATE REQUIRED PROPERTY user_number: std::str;
      CREATE REQUIRED PROPERTY waiting_for_target: std::bool;
  };
};

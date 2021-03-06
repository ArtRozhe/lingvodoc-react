const i18n = new Map();

export const stringsToTranslate = [
  "Accept",
  "Accept Contributions",
  "Action",
  "Actions",
  "Activate",
  "Activate / Deactivate",
  "Add",
  "Add connection",
  "Add field",
  "Add lexical entry",
  "Add link",
  "Add new column",
  "Add one or more perspectives",
  "Add one or more translations",
  "Add perspective",
  "Add Translation",
  "All",
  "Archive",
  "Authors",
  "Available corpora",
  "Available dictionaries",
  "Base blob",
  "Begin",
  "By Grants",
  "By Languages",
  "Cancel",
  "Client type",
  "Close",
  "Cognate acoustic analysis",
  "Cognate analysis",
  "Columns Mapping",
  "confidence",
  "Confirm Password",
  "Connect",
  "Connected",
  "Contibutions",
  "Conversion is in progress...",
  "Convert",
  "Convert to dictionary...",
  "Corpora",
  "Corpora created",
  "Corpora names and metadata",
  "Create",
  "Created",
  "Create a new field",
  "Create a new perspective...",
  "Create corpus",
  "Create dictionary",
  "Create field",
  "Create language",
  "Create one or more perspectives",
  "Critically endangered",
  "Dashboard",
  "Date",
  "Deactivate",
  "Definitely endangered",
  "Delete",
  "desktop",
  "Desktop",
  "Dialeqt file",
  "Dictionaries",
  "Dictionary",
  "Dictionary created",
  "Dictionary names and metadata",
  "Disconnected",
  "Display mode",
  "Edit",
  "Edit profile",
  "Email",
  "Email is required",
  "End",
  "Entities",
  "Entity matching algorithm",
  "Entity matching threshold",
  "Entity status",
  "Entity type",
  "Expedition",
  "Extinct",
  "Failed to ban user!",
  "Failed to launch sound and markup compilation!",
  "Field",
  "Field Type",
  "Fields",
  "Files",
  "Fill metadata information",
  "Filter",
  "Finish",
  "From:",
  "Full name",
  "Grant",
  "Grant Issuer",
  "Grant Number",
  "Grant URL",
  "Grants",
  "Group",
  "Grouping tag",
  "has linked field",
  "Help",
  "here",
  "Human settlement",
  "Image",
  "Import Starling dictionaries",
  "Info",
  "Invalid email address",
  "Issuer URL",
  "Join",
  "Language",
  "Language edit",
  "Language Selection",
  "Languages",
  "Levenshtein distance limit for entity content matching",
  "Lexical entries",
  "Link",
  "Link columns from files with each other",
  "Linking",
  "Loading",
  "Loading suggestions...",
  "Location",
  "Login",
  "Login is required",
  "Map",
  "Map dictionaries to LingvoDoc languages",
  "Map linked columns to LingvoDoc types",
  "Maps",
  "Merge group",
  "Merge lexical entries",
  "Merged successfully",
  "Merge suggestions",
  "Merge task created successfully",
  "Message",
  "Metadata",
  "My corpora",
  "My dictionaries",
  "My files",
  "Name",
  "Name is required",
  "New password",
  "Next Step",
  "No background tasks",
  "No entries",
  "No fields, click button below to add a new one",
  "No more locales!",
  "No suggestions",
  "None",
  "Not supported",
  "Nothing here, sorry",
  "Nothing to",
  "Number of native speakers",
  "Old password",
  "Organization admins",
  "Organization users",
  "Owners",
  "Page",
  "Parent language",
  "Password",
  "PDF file",
  "Perspective",
  "Perspectives",
  "Perspective names",
  "Perspective state",
  "Phonemic analysis",
  "Phonology",
  "Phonological statistical distance",
  "Please select a user",
  "Please, select the parent language",
  "Please sign in",
  "Properties...",
  "Publish",
  "Publish Entities",
  "Publish result of entity merge if any merged entity is published",
  "Refresh",
  "Reject",
  "Relation",
  "Remove",
  "Remove dictionary",
  "Remove lexical entries",
  "Remove perspective",
  "Request has been sent to the grant's owner.",
  "Requests",
  "Role",
  "Roles...",
  "Safe",
  "Save",
  "Save all",
  "Save dictionary",
  "Save only published",
  "Search",
  "Select",
  "Select all on current page",
  "Select dictionary",
  "Select language",
  "Select Language for",
  "Select Parent Language",
  "Select user",
  "Service",
  "Set corpora name, translations and metadata",
  "Set dictionary name, translations and metadata",
  "Severely endangered",
  "Show statistics",
  "Sign In",
  "Sign out",
  "Sign Up",
  "Sound and markup",
  "Sound and markup compilation is being created. Check out tasks for details.",
  "Split contents of the field on punctuation before matching",
  "Split contents of the field on whitespace before matching",
  "Spread",
  "Start typing language name",
  "Statistics...",
  "Storage",
  "Subject",
  "Submit",
  "Sync",
  "Tasks",
  "The entity is currently published. Click to unpublish.",
  "The entity is NOT currently published. Click to publish.",
  "This page is available for administrator only",
  "To:",
  "Tools",
  "total",
  "to view.",
  "Translation for",
  "Translations",
  "Type",
  "Type to search",
  "Unknow request type!",
  "Unknown type",
  "Up",
  "Update",
  "Update dictionary",
  "Upload",
  "URL with results of saving data should appear soon after clicking save button in the tasks",
  "User",
  "User account activation/deactivation",
  "View",
  "View contributions",
  "View published",
  "View suggestions",
  "Vulnerable",
  "web",
  "Years",
  "You have selected:",
  "Your corpora is created, click",
  "Your dictionaries are scheduled for conversion. Please, check tasks tab for conversion status.",
  "Your dictionary is created, click"
];

export function getTranslation(string) {
  const translation = i18n.get(string);
  return (translation == undefined) ? string : translation;
}

export function setTranslation(string, translatedString) {
  if (translatedString == null || translatedString == undefined) {
    i18n.set(string, string);
  }
  else {
    i18n.set(string, translatedString);
  }
}

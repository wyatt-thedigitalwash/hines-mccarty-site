/**
 * Authored copy for the seal-and-expunge checker.
 *
 * Registered in TOOL_PAGE_COPY so the banned-term, duplication and provenance
 * rails read it (D29). The statutory condition text is NOT here: it lives in
 * engine.ts and is proved against the record by `check:seal-expunge`, which is
 * the same split the other tools use.
 */

export const H1 = "Can this record be sealed?";

export const LEAD =
  "Florida lets some people ask a court to seal a criminal record, and the rules are strict enough that most of the guesswork is unnecessary. Statute 943.059 sets five conditions. Answer five short questions, plus two follow-ups only if they apply to you, and this page will tell you which of the five conditions your answers satisfy, which they do not, and which need a person to check.";

export const INTRO_NOTE =
  "Nothing you enter leaves your browser unless you ask for a copy at the end.";

export const CANNOT_KNOW = {
  heading: "What this page cannot tell you.",
  body: "This checks the conditions in Statute 943.059(1) against what you enter, and nothing else. It cannot see your court file, it does not know what your paperwork actually says, and the words people use for how a case ended are often not the words the docket uses. Sealing also runs through a certificate of eligibility from the Florida Department of Law Enforcement and then a petition the court decides, so no page can tell you a record will be sealed. Nothing here is legal advice and nothing here is a promise about your case.",
};

export const NO_RELATIONSHIP =
  "Using this page does not make Hines & McCarty your lawyers, and it does not create an attorney-client relationship. Do not send details of what happened through this page. If you want advice about your own record, speak to a Florida lawyer.";

export const PRIVACY_NOTE =
  "This page asks about the status of a record, not about what happened. It has no field for the facts of a case, on purpose. If you ask for a copy of your summary we store nothing here: the answers travel with that one email and nowhere else.";

export const CAPTURE = {
  heading: "Want this summary in writing?",
  body: "We will email you a copy of your answers and what the statute says about each one, so you have it when you talk to someone. An attorney at the firm gets a copy too, and you can reply to that email to talk to one.",
  consent:
    "By sending this you are asking for a copy of this summary and agreeing that an attorney at the firm may reply to you. You are not becoming a client, and you should not include details of what happened.",
  button: "Email me this summary",
  sending: "Sending",
  successHeading: "Sent",
  successBody:
    "Check your inbox for a copy. An attorney at the firm has it as well and can reply to you directly.",
};

export const STEP_LABEL = "Question";
export const RESTART = "Start over";
export const BACK = "Back";

export const RESULT_INTRO = "What the statute says about your answers";

export const VERSION_NOTE =
  "The conditions on this page come from Statute 943.059, 2025 Florida Statutes, together with the list of offenses that can never be sealed at Statute 943.0584, both recorded 2026-08-25. This page addresses Florida law only.";

/**
 * Copy that exists only after the reader interacts, so it is absent from the
 * server-rendered HTML by design.
 *
 * DECLARED RATHER THAN INFERRED, and checked in BOTH directions by
 * `check:seal-expunge`: every string here must be absent from the built page,
 * and every string not here must be present. A one-way exemption list is a
 * place to hide a string that should have rendered and did not.
 */
export const INTERACTION_ONLY: string[] = [
  CAPTURE.heading,
  CAPTURE.body,
  CAPTURE.consent,
  CAPTURE.button,
  CAPTURE.successHeading,
  CAPTURE.successBody,
  RESULT_INTRO,
];

export const SEAL_EXPUNGE_PAGE_COPY: string[] = [
  H1,
  LEAD,
  INTRO_NOTE,
  CANNOT_KNOW.heading,
  CANNOT_KNOW.body,
  NO_RELATIONSHIP,
  PRIVACY_NOTE,
  CAPTURE.heading,
  CAPTURE.body,
  CAPTURE.consent,
  CAPTURE.button,
  CAPTURE.successHeading,
  CAPTURE.successBody,
  RESULT_INTRO,
  VERSION_NOTE,
];

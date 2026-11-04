UNITED SERVICES TOOLBOX TALK PORTAL

Deployment (Netlify):
1. This is a Netlify project with serverless Functions and Netlify Blobs. Deploy as a project from Git or Netlify CLI; a drag-and-drop of only the public folder will NOT deploy the backend functions.
2. In Netlify site settings -> Environment variables, set TOOLBOX_ADMIN_PASSWORD to a strong unique password (server-side only). Redeploy after adding the variable.
3. Ensure Netlify Blobs is available on the account/site. npm install is performed by Netlify during build.
4. Supervisor visits https://YOUR-SITE.netlify.app/admin, selects a new PDF, checks the sign-in layout, and publishes.
5. Technicians continue using https://YOUR-SITE.netlify.app/.

LIMITATIONS / SAFETY:
- Only the existing two-page US Letter layout with identical sign-in locations is supported. Admin must visually verify page 2.
- Technician signatures are stored in local browser storage until PDF export, NOT in the backend. Submission opens the device share sheet; technician must select Gmail and send.
- No remote signature collection, no centralized submissions, no supervisor audit history or role-based user accounts yet.
- Admin password is shared among authorized supervisors. For production use, upgrade to Netlify Identity/external auth with individual accounts, server-side rate limiting and audit logs.
- Do not publish sensitive crew information in the uploaded blank template. Current PDF is publicly accessible to anyone with the technician link.
- Test PDF coordinates with a signed sample before rollout; template variations require remapping.

Update: signature pad now waits for landscape layout, preserves aspect ratio, and resizes safely on rotation.

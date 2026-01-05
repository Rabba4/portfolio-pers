import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    // Enviar el correo
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Email verificado en Resend
      to: "rbi1957@gmail.com",
      replyTo: email,
      subject: `Nuevo mensaje de ${name} desde tu portfolio`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                        📧 Nuevo Mensaje
                      </h1>
                      <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">
                        Formulario de contacto del portfolio
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <!-- Información del remitente -->
                      <div style="margin-bottom: 30px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 15px; background-color: #f9fafb; border-left: 4px solid #667eea; margin-bottom: 10px;">
                              <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">
                                Nombre
                              </p>
                              <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 600;">
                                ${name}
                              </p>
                            </td>
                          </tr>
                          <tr><td style="height: 10px;"></td></tr>
                          <tr>
                            <td style="padding: 15px; background-color: #f9fafb; border-left: 4px solid #10b981;">
                              <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">
                                Email de contacto
                              </p>
                              <p style="margin: 0;">
                                <a href="mailto:${email}" style="color: #667eea; text-decoration: none; font-size: 16px; font-weight: 500;">
                                  ${email}
                                </a>
                              </p>
                            </td>
                          </tr>
                        </table>
                      </div>

                      <!-- Mensaje -->
                      <div style="margin-top: 30px;">
                        <p style="margin: 0 0 15px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">
                          Mensaje
                        </p>
                        <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px;">
                          <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
                            ${message}
                          </p>
                        </div>
                      </div>

                      <!-- Botón de respuesta -->
                      <div style="text-align: center; margin-top: 35px;">
                        <a href="mailto:${email}?subject=Re: Contacto desde portfolio" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 6px rgba(102, 126, 234, 0.3);">
                          ✉️ Responder mensaje
                        </a>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 25px 30px; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0; color: #9ca3af; font-size: 13px; text-align: center; line-height: 1.5;">
                        Este correo fue enviado desde el formulario de contacto de tu portfolio<br>
                        <span style="color: #d1d5db;">•</span> No respondas directamente a este correo
                      </p>
                    </td>
                  </tr>
                </table>
                
                <!-- Footer externo -->
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin-top: 20px;">
                  <tr>
                    <td style="text-align: center; padding: 20px;">
                      <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                        © ${new Date().getFullYear()} Tu Portfolio. Todos los derechos reservados.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje. Por favor, intenta nuevamente." },
      { status: 500 }
    );
  }
}

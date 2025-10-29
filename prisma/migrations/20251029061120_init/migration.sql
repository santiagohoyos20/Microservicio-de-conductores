-- CreateTable
CREATE TABLE "public"."conductores" (
    "id_usuario" UUID NOT NULL,
    "licencia" TEXT,
    "id_bus" TEXT,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "id_rol" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "tarjeta" TEXT,
    "telefono" TEXT NOT NULL,

    CONSTRAINT "conductores_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateIndex
CREATE UNIQUE INDEX "conductores_licencia_key" ON "public"."conductores"("licencia");

-- CreateIndex
CREATE UNIQUE INDEX "Pasajero_email_key" ON "public"."conductores"("email");

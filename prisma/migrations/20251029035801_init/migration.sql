-- CreateTable
CREATE TABLE "public"."conductores" (
    "id_usuario" UUID NOT NULL,
    "licencia" TEXT NOT NULL,
    "id_bus" TEXT NOT NULL,

    CONSTRAINT "conductores_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateIndex
CREATE UNIQUE INDEX "conductores_licencia_key" ON "public"."conductores"("licencia");

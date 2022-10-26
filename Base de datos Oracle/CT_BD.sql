/*/// Drop Table ///*/

DROP TABLE TAREA CASCADE CONSTRAINTS;
DROP TABLE TAREA_SUBORDINADA CASCADE CONSTRAINTS;
DROP TABLE FLUJO_TAREA CASCADE CONSTRAINTS;
DROP TABLE UNIDAD_INTERNA CASCADE CONSTRAINTS;
DROP TABLE ROL CASCADE CONSTRAINTS;
DROP TABLE USUARIO CASCADE CONSTRAINTS;
DROP TABLE REPORTE_PROBLEMA CASCADE CONSTRAINTS;
DROP TABLE ASIGNACION_TAREA CASCADE CONSTRAINTS;
DROP TABLE ASIGNACION_TAREA_SUBORDINADA CASCADE CONSTRAINTS;
DROP TABLE EJECUCION_FLUJO_TAREA CASCADE CONSTRAINTS;


-----------------------------------------------------------------------------------------------------------------------------------

/*/// Create Table ///*/

CREATE TABLE FLUJO_TAREA (
    id_ft                   NUMBER(6) NOT NULL PRIMARY KEY,
    nombre_ft               VARCHAR2(30) NOT NULL,
    descripcion_ft          VARCHAR2(90) NOT NULL,
    fecha_comienzo_ft       DATE,
    fecha_entrega_ft        DATE,
    porcentaje_avance_ft    NUMBER(6),
    estado_ft               VARCHAR2(15),
    id_responsable_ft       NUMBER(6)
);

CREATE TABLE TAREA (
    id_t                    NUMBER(6) NOT NULL PRIMARY KEY,
    nombre_t                VARCHAR2(30) NOT NULL,
    descripcion_t           VARCHAR2(90) NOT NULL,
    fecha_inicio_t          DATE NOT NULL,
    fecha_entrega_t         DATE NOT NULL,
    porcentaje_avance_t     NUMBER(6),
    estado_t                VARCHAR2(15),
    id_responsable_t        NUMBER(6) NOT NULL
);

CREATE TABLE TAREA_SUBORDINADA (
    id_ts             NUMBER(6) NOT NULL PRIMARY KEY,
    nombre_tarea_ts         VARCHAR2(30) NOT NULL,
    descripcion_ts          VARCHAR2(90) NOT NULL,
    fecha_inicio_ts         DATE,
    fecha_entrega_ts        DATE,
    porcentaje_avance_ts    NUMBER(6),
    estado_ts               VARCHAR2(15),
    id_responsable_ts       NUMBER(6),
    id_t                    NUMBER(6),
    id_ft                   Number(6)
);

CREATE TABLE REPORTE_PROBLEMA (
    id_rp                   NUMBER(6) NOT NULL PRIMARY KEY,
    descripcion_rp          VARCHAR2(90),
    id_t                    NUMBER(6),
    id_ts                   NUMBER(6),
    id_ft                   NUMBER(6)
);

CREATE TABLE UNIDAD_INTERNA (
    id_ui                   NUMBER(6) NOT NULL PRIMARY KEY,
    nombre_ui               VARCHAR2(30) NOT NULL
);

CREATE TABLE ROL (
    id_r                    NUMBER(6) NOT NULL PRIMARY KEY,
    nombre_r                VARCHAR2(30) NOT NULL,
    id_ui             NUMBER(6) NOT NULL
);

CREATE TABLE USUARIO (
    id_u                    NUMBER(6) NOT NULL PRIMARY KEY,
    nombre_u                VARCHAR2(30) NOT NULL,
    email_u                 VARCHAR2(30) NOT NULL,
    password_u              VARCHAR2(30) NOT NULL,
    id_r                    NUMBER(6) NOT NULL
);

CREATE TABLE ASIGNACION_TAREA (
    id_u_at                  NUMBER(6) NOT NULL PRIMARY KEY,
    id_t_at                  NUMBER(6) UNIQUE,
    respuesta_at             VARCHAR2(30) NOT NULL,
    justificacion_ats        VARCHAR2(30)
);

CREATE TABLE ASIGNACION_TAREA_SUBORDINADA (
    id_u_ats                  NUMBER(6) NOT NULL PRIMARY KEY,
    id_ts_ats                 NUMBER(6) UNIQUE,
    respuesta_ats             VARCHAR2(30) NOT NULL,
    justificacion_ats         VARCHAR2(30)
);

CREATE TABLE EJECUCION_FLUJO_TAREA(
    id_u_eft                 NUMBER(6) NOT NULL PRIMARY KEY,
    id_ft_eft                NUMBER(6) UNIQUE,
    respuesta_eft            VARCHAR2(30) NOT NULL,
    justificacion_eft        VARCHAR2(30)
);

-----------------------------------------------------------------------------------------------------------------------------------
/*/// Alter Table ///*/
  /* Tareas */
ALTER TABLE TAREA ADD CONSTRAINT id_responsable_t_fk FOREIGN KEY (id_responsable_t) REFERENCES USUARIO (id_u) NOT DEFERRABLE;

  /* Tareas subordinadas */
ALTER TABLE TAREA_SUBORDINADA ADD CONSTRAINT id_responsable_ts_fk FOREIGN KEY (id_responsable_ts) REFERENCES usuario (id_u) NOT DEFERRABLE;
ALTER TABLE TAREA_SUBORDINADA ADD CONSTRAINT id_t_fk FOREIGN KEY (id_t) REFERENCES tarea (id_t) NOT DEFERRABLE;
ALTER TABLE TAREA_SUBORDINADA ADD CONSTRAINT id_ft_fk FOREIGN KEY (id_ft) REFERENCES flujo_tarea (id_ft) NOT DEFERRABLE;

  /* Flujo tareas */
ALTER TABLE FLUJO_TAREA ADD CONSTRAINT id_responsable_ft_fk FOREIGN KEY (id_responsable_ft) REFERENCES usuario (id_u) NOT DEFERRABLE;

  /* Reportar problema */
ALTER TABLE REPORTE_PROBLEMA ADD CONSTRAINT id_rp_t_fk FOREIGN KEY (id_t) REFERENCES tarea (id_t) NOT DEFERRABLE;
ALTER TABLE REPORTE_PROBLEMA ADD CONSTRAINT id_rp_ts_fk FOREIGN KEY (id_ts) REFERENCES tarea_subordinada (id_ts) NOT DEFERRABLE;
ALTER TABLE REPORTE_PROBLEMA ADD CONSTRAINT id_rp_ft_fk FOREIGN KEY (id_ft) REFERENCES flujo_tarea (id_ft) NOT DEFERRABLE;

  /* Rol */
ALTER TABLE ROL ADD CONSTRAINT id_rol_ui_fk FOREIGN KEY (id_ui) REFERENCES UNIDAD_INTERNA (id_ui) NOT DEFERRABLE;

  /* Usuario */
ALTER TABLE USUARIO ADD CONSTRAINT id_r_u_fk FOREIGN KEY (id_r) REFERENCES rol (id_r) NOT DEFERRABLE;

  /* Asignaci�n tarea */
ALTER TABLE ASIGNACION_TAREA ADD CONSTRAINT id_u_at_fk FOREIGN KEY (id_u_at) REFERENCES usuario (id_u) NOT DEFERRABLE;
ALTER TABLE ASIGNACION_TAREA ADD CONSTRAINT id_t_at_fk FOREIGN KEY (id_t_at) REFERENCES tarea (id_t) NOT DEFERRABLE;

  /* Asignaci�n tarea subordinada */
ALTER TABLE ASIGNACION_TAREA_SUBORDINADA ADD CONSTRAINT id_u_ats_fk FOREIGN KEY (id_u_ats) REFERENCES usuario (id_u) NOT DEFERRABLE;
ALTER TABLE ASIGNACION_TAREA_SUBORDINADA ADD CONSTRAINT id_ts_ats_fk FOREIGN KEY (id_ts_ats) REFERENCES tarea_subordinada (id_ts) NOT DEFERRABLE;

  /* Ejecuci�n flujo de tareas */
ALTER TABLE EJECUCION_FLUJO_TAREA ADD CONSTRAINT id_u_eft_fk FOREIGN KEY (id_u_eft) REFERENCES usuario (id_u) NOT DEFERRABLE;
ALTER TABLE EJECUCION_FLUJO_TAREA ADD CONSTRAINT id_ft_eft_fk FOREIGN KEY (id_ft_eft) REFERENCES flujo_tarea (id_ft) NOT DEFERRABLE;
  
-----------------------------------------------------------------------------------------------------------------------------------
/*/// Inserción de datos ///*/

INSERT INTO UNIDAD_INTERNA VALUES ('1', 'Contabilidad');
INSERT INTO UNIDAD_INTERNA VALUES ('2', 'Programador');

INSERT INTO ROL VALUES ('1', 'Contador', '1');
INSERT INTO ROL VALUES ('2', 'Programacion', '2');

INSERT INTO USUARIO VALUES ('1', 'Alonso Silva Bustos', 'alo.silva@duocuc.cl', '12345', '2');
INSERT INTO USUARIO VALUES ('2', 'Jimmy Cabrera', 'jim.cabrera@duocuc.cl', '12345', '2');
INSERT INTO USUARIO VALUES ('3', 'Manuel Mu�oz', 'Manue.munozg@duocuc.cl', '12345', '2');

INSERT INTO TAREA VALUES ('1', 'Programaci�n de portafolio', 'Proceso de programaci�n de p�gina web en base al caso N�5', '18-10-2022', '1-12-2022', '0', 'En curso', '1');
INSERT INTO TAREA VALUES ('2', 'Programaci�n de portafolio', 'Proceso de programaci�n de p�gina web en base al caso N�5', '25-10-2022', '1-12-2022', '0', 'En curso', '1');
INSERT INTO TAREA VALUES ('3', 'Programaci�n de portafolio', 'Proceso de programaci�n de p�gina web en base al caso N�5', '08-09-2022', '31-12-2022', '0', 'En curso', '1');


-----------------------------------------------------------------------------------------------------------------------------------
/*/// PL SQL ///*/

/* Calculo varias filas de tarea FUNCIONAL */

DECLARE
    V_PROGRESO_ACTUAL NUMBER(10);
    CURSOR c_t IS SELECT id_t FROM tarea where estado_t = 'En curso';
BEGIN
    for v_fila in c_t LOOP
    SELECT ROUND(ROUND(SYSDATE - fecha_inicio_t)*100/(fecha_entrega_t - fecha_inicio_t))
    INTO V_PROGRESO_ACTUAL
    FROM tarea
    WHERE v_fila.id_t = id_t;
    UPDATE tarea 
    SET porcentaje_avance_t = V_PROGRESO_ACTUAL
    WHERE v_fila.id_t = id_t;
    END LOOP;
    COMMIT;
END;

/* Calculo varias filas de tarea subordinadas FUNCIONAL */

DECLARE
    V_PROGRESO_ACTUAL NUMBER(10);
    CURSOR c_ts IS SELECT id_ts FROM tarea_subordinada where estado_ts = 'En curso';
BEGIN
    for v_fila in c_ts LOOP
    SELECT ROUND(ROUND(SYSDATE - fecha_inicio_ts)*100/(fecha_entrega_ts - fecha_inicio_ts))
    INTO V_PROGRESO_ACTUAL
    FROM tarea_subordinada
    WHERE v_fila.id_ts = id_ts;
    UPDATE tarea_subordinada 
    SET porcentaje_avance_ts = V_PROGRESO_ACTUAL
    WHERE v_fila.id_ts = id_ts;
    END LOOP;
    COMMIT;
END;

/* Calculo varias filas de flujo de tareas FUNCIONAL */

DECLARE
    V_PROGRESO_ACTUAL NUMBER(10);
    CURSOR c_ft IS SELECT id_ft FROM flujo_tarea where estado_ft = 'En curso';
BEGIN
    for v_fila in c_ft LOOP
    SELECT ROUND(ROUND(SYSDATE - fecha_inicio_ft)*100/(fecha_entrega_ft - fecha_inicio_ft))
    INTO V_PROGRESO_ACTUAL
    FROM flujo_tarea
    WHERE v_fila.id_ft = id_ft;
    UPDATE flujo_tarea
    SET porcentaje_avance_ft = V_PROGRESO_ACTUAL
    WHERE v_fila.id_ft = id_ft;
    END LOOP;
    COMMIT;
END;

-----------------------------------------------------------------------------------------------------------------------------------
/*/// Consultas ///*/

SELECT * FROM UNIDAD_INTERNA;
SELECT * FROM ROL;
SELECT * FROM USUARIO;
SELECT * FROM TAREA;
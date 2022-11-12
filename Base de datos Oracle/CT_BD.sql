/*/// Drop Table ///*/

DROP TABLE EMPRESA CASCADE CONSTRAINTS;
DROP TABLE TAREA CASCADE CONSTRAINTS;
DROP TABLE TAREA_SUBORDINADA CASCADE CONSTRAINTS;
DROP TABLE FLUJO_TAREA CASCADE CONSTRAINTS;
DROP TABLE UNIDAD_INTERNA CASCADE CONSTRAINTS;
DROP TABLE ROL CASCADE CONSTRAINTS;
DROP TABLE CARGO CASCADE CONSTRAINTS;
DROP TABLE USUARIO CASCADE CONSTRAINTS;
DROP TABLE REPORTE_PROBLEMA CASCADE CONSTRAINTS;
DROP TABLE ASIGNACION_TAREA CASCADE CONSTRAINTS;
DROP TABLE ASIGNACION_TAREA_SUBORDINADA CASCADE CONSTRAINTS;
DROP TABLE EJECUCION_FLUJO_TAREA CASCADE CONSTRAINTS;


-----------------------------------------------------------------------------------------------------------------------------------

/*/// Create Table ///*/

CREATE TABLE FLUJO_TAREA (
    id_ft                   NUMBER(6) NOT NULL PRIMARY KEY,
    nombre_ft               VARCHAR2(50) NOT NULL,
    descripcion_ft          VARCHAR2(160) NOT NULL,
    fecha_inicio_ft         DATE,
    fecha_entrega_ft        DATE,
    porcentaje_avance_ft    NUMBER(6),
    estado_ft               VARCHAR2(15)
);

CREATE TABLE TAREA (
    id_t                    NUMBER(6) NOT NULL PRIMARY KEY,
    nombre_t                VARCHAR2(50) NOT NULL,
    descripcion_t           VARCHAR2(160) NOT NULL,
    fecha_inicio_t          DATE NOT NULL,
    fecha_entrega_t         DATE NOT NULL,
    porcentaje_avance_t     NUMBER(6),
    estado_t                VARCHAR2(15)
);

CREATE TABLE TAREA_SUBORDINADA (
    id_ts                   NUMBER(6) NOT NULL PRIMARY KEY,
    nombre_ts	            VARCHAR2(50) NOT NULL,
    descripcion_ts          VARCHAR2(160) NOT NULL,
    fecha_inicio_ts         DATE,
    fecha_entrega_ts        DATE,
    porcentaje_avance_ts    NUMBER(6),
    estado_ts               VARCHAR2(15),
    id_t                    NUMBER(6),
    id_ft                   Number(6)
);

CREATE TABLE REPORTE_PROBLEMA (
    id_rp                   NUMBER(6) NOT NULL PRIMARY KEY,
    descripcion_rp          VARCHAR2(160),
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
    nombre_r                VARCHAR2(30) NOT NULL
);

CREATE TABLE CARGO (
    id_c                    NUMBER(6) NOT NULL PRIMARY KEY,
    nombre_c                VARCHAR2(30) NOT NULL,
    id_ui                   NUMBER(6) NOT NULL,
    id_r                    NUMBER(6) NOT NULL
);

CREATE TABLE EMPRESA (
    id_e                   NUMBER(6) NOT NULL PRIMARY KEY,
    nombre_e               VARCHAR2(30) NOT NULL
);

CREATE TABLE USUARIO (
    id_u                    NUMBER(6) NOT NULL PRIMARY KEY,
    nombre_u                VARCHAR2(30) NOT NULL,
    email_u                 VARCHAR2(30) NOT NULL,
    password_u              VARCHAR2(30) NOT NULL,
    id_c                    NUMBER(6) NOT NULL,
    id_e		    NUMBER(6) NOT NULL
);

CREATE TABLE ASIGNACION_TAREA (
    id_u_at                  NUMBER(6),
    id_t_at                  NUMBER(6),
    respuesta_at             VARCHAR2(30) NOT NULL,
    justificacion_at        VARCHAR2(30),
    CONSTRAINT ASIG_T_USUARIO FOREIGN KEY (id_u_at) REFERENCES USUARIO (id_u),
    CONSTRAINT ASIG_T_TAREA FOREIGN KEY (id_t_at) REFERENCES TAREA (id_t),
    CONSTRAINT asig_t_pk PRIMARY KEY (id_u_at, id_t_at)
);

CREATE TABLE ASIGNACION_TAREA_SUBORDINADA (
    id_u_ats                  NUMBER(6),
    id_ts_ats                 NUMBER(6),
    respuesta_ats             VARCHAR2(30) NOT NULL,
    justificacion_ats         VARCHAR2(30),
    CONSTRAINT ASIG_TS_USUARIO FOREIGN KEY (id_u_ats) REFERENCES USUARIO (id_u),
    CONSTRAINT ASIG_TS_TAREA FOREIGN KEY (id_ts_ats) REFERENCES TAREA_SUBORDINADA (id_ts),
    CONSTRAINT asig_ts_pk PRIMARY KEY (id_u_ats, id_ts_ats)
);

CREATE TABLE EJECUCION_FLUJO_TAREA(
    id_u_eft                 NUMBER(6),
    id_ft_eft                NUMBER(6),
    respuesta_eft            VARCHAR2(30) NOT NULL,
    justificacion_eft        VARCHAR2(30),
    CONSTRAINT EJEC_FT_USUARIO FOREIGN KEY (id_u_eft) REFERENCES USUARIO (id_u),
    CONSTRAINT EJEC_FT_TAREA FOREIGN KEY (id_ft_eft) REFERENCES FLUJO_TAREA (id_ft),
    CONSTRAINT ejec_ft_pk PRIMARY KEY (id_u_eft, id_ft_eft)
);

-----------------------------------------------------------------------------------------------------------------------------------
/*/// Alter Table ///*/

  /* Tareas subordinadas */
ALTER TABLE TAREA_SUBORDINADA ADD CONSTRAINT id_t_fk FOREIGN KEY (id_t) REFERENCES tarea (id_t) NOT DEFERRABLE;
ALTER TABLE TAREA_SUBORDINADA ADD CONSTRAINT id_ft_fk FOREIGN KEY (id_ft) REFERENCES flujo_tarea (id_ft) NOT DEFERRABLE;


  /* Reportar problema */
ALTER TABLE REPORTE_PROBLEMA ADD CONSTRAINT id_rp_t_fk FOREIGN KEY (id_t) REFERENCES tarea (id_t) NOT DEFERRABLE;
ALTER TABLE REPORTE_PROBLEMA ADD CONSTRAINT id_rp_ts_fk FOREIGN KEY (id_ts) REFERENCES tarea_subordinada (id_ts) NOT DEFERRABLE;
ALTER TABLE REPORTE_PROBLEMA ADD CONSTRAINT id_rp_ft_fk FOREIGN KEY (id_ft) REFERENCES flujo_tarea (id_ft) NOT DEFERRABLE;

  /* Cargo */
ALTER TABLE CARGO ADD CONSTRAINT id_c_ui_fk FOREIGN KEY (id_ui) REFERENCES UNIDAD_INTERNA (id_ui) NOT DEFERRABLE;
ALTER TABLE CARGO ADD CONSTRAINT id_c_r_fk FOREIGN KEY (id_r) REFERENCES rol (id_r) NOT DEFERRABLE;

  /* Usuario */
ALTER TABLE USUARIO ADD CONSTRAINT id_c_u_fk FOREIGN KEY (id_c) REFERENCES cargo (id_c) NOT DEFERRABLE;
ALTER TABLE USUARIO ADD CONSTRAINT id_e_u_fk FOREIGN KEY (id_e) REFERENCES EMPRESA (id_e) NOT DEFERRABLE;
  
-----------------------------------------------------------------------------------------------------------------------------------
/*/// Insertar de tabla tareas ///*/

INSERT INTO UNIDAD_INTERNA VALUES ('1', 'Departamento de contabilidad');
INSERT INTO UNIDAD_INTERNA VALUES ('2', 'Departamento de informatica');

INSERT INTO ROL VALUES ('1', 'Administrador');
INSERT INTO ROL VALUES ('2', 'Diseñador de procesos');
INSERT INTO ROL VALUES ('3', 'Funcionario');

INSERT INTO CARGO VALUES ('1', 'Contador Auditor', 1, 2);
INSERT INTO CARGO VALUES ('2', 'Contador', 1, 3);
INSERT INTO CARGO VALUES ('3', 'Ayudante de Contador', 1, 3);
INSERT INTO CARGO VALUES ('4', 'Programador Senior', 2, 1);
INSERT INTO CARGO VALUES ('5', 'Programador Semi Senior', 2, 3);
INSERT INTO CARGO VALUES ('6', 'Programador Junior', 2, 3);

INSERT INTO EMPRESA VALUES ('1', 'Ubisoft');
INSERT INTO EMPRESA VALUES ('2', 'Coca-Cola Company');

INSERT INTO USUARIO VALUES ('1', 'Alonso Silva Bustos', 'alo.silva@duocuc.cl', '12345', '6', '2');
INSERT INTO USUARIO VALUES ('2', 'Jimmy Cabrera', 'jim.cabrera@duocuc.cl', '12345', '6', '1');
INSERT INTO USUARIO VALUES ('3', 'Manuel Muñoz', 'Manue.munozg@duocuc.cl', '12345', '6', '1');

INSERT INTO TAREA VALUES ('1', 'Programación de portafolio', 'Proceso de programación de página web en base al caso N°5', '18-10-2022', '1-12-2022', '0', 'En curso');
INSERT INTO TAREA VALUES ('2', 'Programación de portafolio', 'Proceso de programación de página web en base al caso N°5', '25-10-2022', '1-12-2022', '0', 'En curso');
INSERT INTO TAREA VALUES ('3', 'Programación de portafolio', 'Proceso de programación de página web en base al caso N°5', '08-09-2022', '31-12-2022', '0', 'En curso');

INSERT INTO FLUJO_TAREA VALUES ('1', 'Programación de portafolio', 'Proceso de programación de página web en base al caso N°5', '02-08-2022', '03-09-2022', '0', 'En curso');


INSERT INTO TAREA_SUBORDINADA VALUES ('1', 'Programación de modulo de mantención', 'Proceso de programación de la vista de la página web del modulo de manteción en base al caso N°5', '02-08-2022', '03-09-2022', '0', 'En curso', 1, 1);
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
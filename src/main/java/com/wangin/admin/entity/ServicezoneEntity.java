package com.wangin.admin.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
@Setter
@Table(name = "servicezone")
public class ServicezoneEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pk")
    private Long pk;

    @Column(name = "zonename")
    private String zonename;

    @Column(name = "zonecenter")
    private String zonecenter;

    @Column(name = "marker")
    private String marker;

    @Column(name = "address1")
    private String address1;

    @Builder
    public ServicezoneEntity(Long pk, String zonename, String zonecenter, String marker, String address1) {
        this.pk = pk;
        this.zonename = zonename;
        this.zonecenter = zonecenter;
        this.marker = marker;
        this.address1 = address1;
    }
}

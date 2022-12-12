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
@Table(name = "SPRING_TABLE")
public class SpringTableEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MY_NUMBER")
    private Long myNumber;

    @Column(name = "MY_NAME")
    private String myName;

    @Column(name = "MY_INFO")
    private String myInfo;

    @Builder
    public SpringTableEntity(Long myNumber, String myName, String myInfo) {
        this.myNumber = myNumber;
        this.myName = myName;
        this.myInfo = myInfo;
    }
}
package beans;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
public abstract class AbstractPoint {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

}